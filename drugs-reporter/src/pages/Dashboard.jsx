import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllReports } from '../features/reports/reportsSlice';
import Card from '../components/card.jsx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const { reports } = useSelector((store) => store.reports);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    dispatch(getAllReports());
  }, [dispatch, navigate, user]);

  return (
    <div>
      <Navbar />
      <div>
        {reports.map((report) => {
          return (
            <Card
              name={report.name}
              email={report.email}
              location={report.location}
              pincode={report.pincode}
              type={report.type}
              description={report.description}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
