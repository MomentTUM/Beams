import { useLocation } from 'react-router-dom';
import LayoutFeed from './LayoutFeed';
import LayoutLogin from './LayoutLogin';
import LayoutMember from './LayoutMember';

export default function Layout() {
  const location = useLocation();

  if (location.pathname === '/') {
    return <LayoutFeed />;
  } else if (location.pathname === '/DetailFeed') {
    return <LayoutFeed />;
  } else if (location.pathname === '/login') {
    return <LayoutLogin />;
  } else if (location.pathname === '/register') {
    return <LayoutLogin />;
  } else if (location.pathname === '/member') {
    return <LayoutMember />;
  } else {
    // แสดงอย่างอื่น (อาจจะใส่ข้อความเราไม่พบเส้นทางที่ต้องการ)
    return <div>ไม่พบเส้นทางที่ต้องการ</div>;
  }
}
