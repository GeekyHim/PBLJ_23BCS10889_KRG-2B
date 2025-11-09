import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { login, saveToken, logout } from '../services/auth'
import { createProperty } from '../services/properties'

const Admin = () => {
  const [isAuthed, setIsAuthed] = useState(!!localStorage.getItem('auth_token'))
  const [whoami, setWhoami] = useState(null)
  useEffect(() => {
    let mounted = true
    async function check() {
      try {
        const res = await fetch('http://localhost:8080/api/admin/me', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('auth_token') || ''}` }
        })
        if (mounted) setIsAuthed(res.ok)
        if (mounted && res.ok) {
          const data = await res.json().catch(() => null)
          setWhoami(data)
        }
        if (mounted && res.status === 401) setIsAuthed(false)
      } catch (_) {
        if (mounted) setIsAuthed(false)
      }
    }
    if (isAuthed) check()
    return () => { mounted = false }
  }, [])
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState('')

  const { register: regLogin, handleSubmit: handleLoginSubmit, formState: { isSubmitting: loggingIn } } = useForm()
  const { register: regProp, handleSubmit: handlePropSubmit, reset, formState: { isSubmitting: saving } } = useForm({
    defaultValues: { title: '', address: '', city: '', description: '', pricePerMonth: '', imageUrls: '' }
  })

  async function onLogin(data) {
    setError('')
    try {
      const res = await login({ email: data.email, password: data.password })
      if (res?.token) {
        saveToken(res.token)
        setIsAuthed(true)
        try {
          const me = await fetch('http://localhost:8080/api/admin/me', { headers: { 'Authorization': `Bearer ${res.token}` }})
          if (me.ok) { setWhoami(await me.json().catch(() => null)) }
        } catch(_) {}
        alert('Admin logged in')
      } else {
        setError('Login failed')
      }
    } catch (e) {
      setError(e.message || 'Login failed')
    }
  }

  async function onAddProperty(data) {
    setError('')
    setAdding(true)
    try {
      const payload = {
        title: data.title,
        address: data.address,
        city: data.city,
        description: data.description,
        pricePerMonth: data.pricePerMonth ? Number(data.pricePerMonth) : null,
        imageUrls: data.imageUrls ? data.imageUrls.split(',').map(s => s.trim()).filter(Boolean) : []
      }
      await createProperty(payload)
      alert('Property created')
      reset()
      window.location.assign('/')
    } catch (e) {
      if (e?.status === 401 || e?.status === 403) {
        setError('Not authorized. Please log in with an admin account.')
      } else {
        setError(e.message || 'Failed to create property')
      }
    } finally {
      setAdding(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}

      {!isAuthed ? (
        <form onSubmit={handleLoginSubmit(onLogin)} className="bg-white border rounded-lg p-4 space-y-3">
          <h2 className="text-lg font-medium">Admin Login</h2>
          <input type="email" placeholder="Email" className="border rounded px-3 py-2 w-full"
                 {...regLogin('email', { required: true })} />
          <input type="password" placeholder="Password" className="border rounded px-3 py-2 w-full"
                 {...regLogin('password', { required: true })} />
          <button disabled={loggingIn} className={`px-4 py-2 rounded text-white ${loggingIn ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {loggingIn ? 'Logging in...' : 'Login'}
          </button>
        </form>
      ) : (
        <form onSubmit={handlePropSubmit(onAddProperty)} className="bg-white border rounded-lg p-4 space-y-3">
          <h2 className="text-lg font-medium">Add Property</h2>
          <div className="flex justify-end">
            <button type="button" onClick={() => { logout(); window.location.assign('/admin'); }} className="px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300 text-gray-800">Logout</button>
          </div>
          <input placeholder="Title" className="border rounded px-3 py-2 w-full" {...regProp('title', { required: true })} />
          <input placeholder="Address" className="border rounded px-3 py-2 w-full" {...regProp('address', { required: true })} />
          <input placeholder="City" className="border rounded px-3 py-2 w-full" {...regProp('city')} />
          <textarea placeholder="Description" className="border rounded px-3 py-2 w-full" {...regProp('description')} />
          <input placeholder="Price per month (number)" className="border rounded px-3 py-2 w-full" type="number" min="0" {...regProp('pricePerMonth')} />
          <input placeholder="Image URLs (comma separated)" className="border rounded px-3 py-2 w-full" {...regProp('imageUrls')} />
          <button disabled={saving || adding} className={`px-4 py-2 rounded text-white ${saving || adding ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}>
            {saving || adding ? 'Saving...' : 'Create Property'}
          </button>
        </form>
      )}
    </div>
  )
}

export default Admin


