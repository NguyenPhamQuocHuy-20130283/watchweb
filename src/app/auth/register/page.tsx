'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import Link from 'next/link';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';

export default function RegisterPage() {
 const router = useRouter();
 const { register } = useAuthContext();
 
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
 });
 const [errors, setErrors] = useState<any>({});
 const [isLoading, setIsLoading] = useState(false);
 const [serverError, setServerError] = useState('');

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  if (errors[name]) setErrors({ ...errors, [name]: '' });
  setServerError('');
 };

 const validate = () => {
  const newErrors: any = {};
  if (!formData.firstName) newErrors.firstName = 'First name is required';
  if (!formData.lastName) newErrors.lastName = 'Last name is required';
  if (!formData.email) newErrors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
  if (!formData.password) newErrors.password = 'Password is required';
  else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
  if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;
  setIsLoading(true);
  setServerError('');

  try {
   await register(formData);
   router.push('/'); // Chuyển về trang chủ sau khi đăng ký thành công
  } catch (error) {
   setServerError('Failed to create an account. Please try again.');
  } finally {
   setIsLoading(false);
  }
 };

 return (
  <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center p-4">
   <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-6">
          <Link href="/"><h1 className="text-4xl font-bold text-red-500">WatchWeb</h1></Link>
          <p className="text-gray-600 mt-2">Create your new account</p>
        </div>
    
    {serverError && (
     <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
      <AlertCircle className="w-5 h-5 text-red-500" />
      <p className="text-sm text-red-700">{serverError}</p>
     </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* First Name & Last Name */}
            <div>
              <input name="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <input name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
          {/* Email, Password, Confirm Password inputs go here, similar to login form */}
          <div>
            <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div>
            <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`} />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
     <button type="submit" disabled={isLoading} className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-bold disabled:bg-gray-400">
      {isLoading ? 'Creating Account...' : 'Sign Up'}
     </button>
    </form>
        <p className="mt-6 text-center text-sm text-gray-600">
      Already have an account?{' '}
      <Link href="/auth/login" className="text-red-500 hover:text-red-600 font-semibold">
       Sign In
      </Link>
    </p>
   </div>
  </div>
 );
}