import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './layout/AdminDashboard';
//eslint-disable-next-line
import EnrollmentJourny from './pages/EnrollmentJourny/EnrollmentJourny';
import StudentList from './pages/StudentList';
import DocumentLibrary from './pages/DocumentLibrary/DocumentLibrary';
import Record from './pages/StudentRecord/Record';
import EnrollmentDocuments from './pages/StudentRecord/EnrollmentDocuments';
import SubDocuments from './pages/StudentRecord/SubDocuments';
import CampusContent from './pages/CampusContent/CampusContent';
import MainScreen from './pages/Messaging/MainScreen';
import MainDashbord from './pages/EnrollmentJourny/MainDashbord';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          <Route index element={<MainDashbord />} />
          <Route path="enrollment-journy" element={<MainDashbord />} />
          <Route path="document-library" element={<DocumentLibrary />} />
          <Route path="messaging" element={<MainScreen />} />
          <Route path="student-list" element={<StudentList />} />
          <Route path="enrollment-document" element={<EnrollmentDocuments />} />
          <Route path="sub-documents" element={<SubDocuments />} />
          <Route path="campus-content" element={<CampusContent />} />
          <Route path="student-record" element={<Record />} />
          <Route path="screen-8" element={<h1>Screen 8</h1>} />
          <Route path="screen-9" element={<h1>Screen 9</h1>} />
          <Route path="screen-10" element={<h1>Screen 10</h1>} />
          <Route path="screen-11" element={<h1>Screen 11</h1>} />
          <Route path="screen-12" element={<h1>Screen 12</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
