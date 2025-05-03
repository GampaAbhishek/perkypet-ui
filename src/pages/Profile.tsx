import Header from "@/components/Profile/Header/Header";
import Health from "@/components/Profile/Health/Health";
import Video from "@/components/Profile/Video/Video";
import History from "@/components/Profile/History/History";
import Timeline from "@/components/Profile/TimeLine/TimeLine";
import Footer from "@/components/Footer/Footer";
import Compatibility from "@/components/Profile/Compatibility/Compatibility";
import CompareBreeds from "@/components/Profile/CompareBreeds/CompareBreeds";
import Dyk from "@/components/Profile/Dyk/Dyk";

export default function Profile() {
  return (
    <div className="page-container">
      <Header />
      <Video />
      <Compatibility />
      <Health />
      <History />
      <Timeline />
      <Dyk />
      <CompareBreeds />
      <Footer />
    </div>
  );
}
