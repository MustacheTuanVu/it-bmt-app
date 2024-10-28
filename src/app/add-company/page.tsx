// src/app/add-company/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddCompany() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Trạng thái của form
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    facebook: '',
    review: '',
    recruitmentPosts: '',
  });

  // Xử lý chuyển hướng nếu người dùng chưa đăng nhập
  useEffect(() => {
    if (status === 'loading') return; // Đợi xác thực
    if (!session) router.push('/login'); // Chuyển hướng nếu chưa đăng nhập
  }, [session, status, router]);

  // Xử lý gửi form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          recruitmentPosts: form.recruitmentPosts.split('\n').map(post => post.trim()).filter(post => post),
        }),
      });

      if (res.ok) {
        // Thành công, chuyển hướng về trang chủ
        router.push('/');
      } else {
        // Lỗi từ server
        const data = await res.json();
        alert(data.message || 'Có lỗi xảy ra khi thêm công ty.');
      }
    } catch (error) {
      console.error('Error adding company:', error);
      alert('Có lỗi xảy ra khi thêm công ty.');
    }
  };

  // Hiển thị loading khi kiểm tra phiên đăng nhập
  if (status === 'loading') {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Thêm Công ty IT</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Tên Công ty</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Nhập tên công ty"
          />
        </div>
        <div>
          <label className="block text-gray-700">Địa chỉ</label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Nhập địa chỉ công ty"
          />
        </div>
        <div>
          <label className="block text-gray-700">Số điện thoại</label>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Nhập số điện thoại công ty"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Nhập email công ty"
          />
        </div>
        <div>
          <label className="block text-gray-700">Facebook</label>
          <input
            type="url"
            value={form.facebook}
            onChange={(e) => setForm({ ...form, facebook: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Nhập link Facebook công ty"
          />
        </div>
        <div>
          <label className="block text-gray-700">Review</label>
          <textarea
            value={form.review}
            onChange={(e) => setForm({ ...form, review: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Nhập đánh giá về công ty"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Tin tuyển dụng</label>
          <textarea
            value={form.recruitmentPosts}
            onChange={(e) => setForm({ ...form, recruitmentPosts: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Nhập các tin tuyển dụng, mỗi tin cách nhau bằng dòng mới"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Thêm Công ty
        </button>
      </form>
    </div>
  );
}
