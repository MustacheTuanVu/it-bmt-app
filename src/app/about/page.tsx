// app/page.jsx
'use client';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>IT Buôn Ma Thuột - Hỗ Trợ Coder Tìm Việc</title>
        <meta name="description" content="IT Buôn Ma Thuột là ứng dụng phi lợi nhuận hỗ trợ coder tìm việc và tìm tin tuyển dụng miễn phí." />
        <meta name="keywords" content="IT Buôn Ma Thuột, tìm việc IT, tuyển dụng IT Đắk Lắk, công ty IT Buôn Ma Thuột, không lợi nhuận, coder" />
        <meta property="og:title" content="IT Buôn Ma Thuột - Hỗ Trợ Coder Tìm Việc" />
        <meta property="og:description" content="IT Buôn Ma Thuột là ứng dụng phi lợi nhuận hỗ trợ coder tìm việc và tìm tin tuyển dụng miễn phí." />
        <meta property="og:url" content="https://it-bmt.coderkiemcom.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://it-bmt.coderkiemcom.com" />
      </Head>
      
      <main className="container mx-auto p-4">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold">IT Buôn Ma Thuột</h1>
          <p className="mt-4 text-lg">Ứng dụng phi lợi nhuận hỗ trợ coder tìm việc và các công ty IT tại Buôn Ma Thuột</p>
        </header>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Tại sao lại tạo ra IT Buôn Ma Thuột?</h2>
          <p className="mt-4">
            Với sự hiện diện của các trang tuyển dụng như TopCV, VietnamWork... trên thị trường, bạn có thể thắc mắc tại sao lại cần thêm một website khác. Lý do chính là đa phần các công ty IT ở Đắk Lắk không đủ kinh phí để đăng tin tuyển dụng trên các trang lớn. Thay vào đó, họ thường chỉ đăng thông tin tuyển dụng trên fanpage hoặc website riêng của công ty. Việc tìm việc IT tại Buôn Ma Thuột cực kỳ khó khăn, anh em IT ở Buôn Ma Thuột sống khổ vãi cả đái ra.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Mục tiêu của chúng tôi</h2>
          <p className="mt-4">
            Chúng tôi tạo ra IT Buôn Ma Thuột để tổng hợp thông tin các công ty IT tại Buôn Ma Thuột, với sức người có hạn, hy vọng cộng đồng có thể đóng góp thêm thông tin về các công ty khác. Điều này sẽ giúp các coder dễ dàng tìm kiếm cơ hội việc làm phù hợp hơn.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Đóng góp và Sử dụng Mã Nguồn</h2>
          <p className="mt-4">
            Source code của chúng tôi được public trên <a href="https://github.com/MustacheTuanVu/it-bmt-app" className="text-blue-500 underline">GitHub</a>. Nếu bạn muốn đóng góp code, hãy tham gia nhé. Bạn cũng có thể lấy code để sử dụng cho mục đích cá nhân, thậm chí tạo ra các website khác. Tuy nhiên, chúng tôi nghiêm cấm tuyệt đối việc thương mại hóa sản phẩm này.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Chính Sách Sử Dụng</h2>
          <p className="mt-4">
            Website này là phi lợi nhuận, không thuộc về bất kỳ tổ chức, cá nhân, hay công ty nào. Nghiêm cấm thương mại hóa dưới mọi hình thức. Chúng tôi mong muốn duy trì mục tiêu hỗ trợ cộng đồng coder và các công ty IT trong khu vực.
          </p>
        </section>

        <footer className="text-center my-8">
          <p>&copy; {new Date().getFullYear()} coderkiemcom. Free mã nguồn mở nhưng nghiêm cấm thương mại hóa.</p>
        </footer>
      </main>
    </>
  );
}
