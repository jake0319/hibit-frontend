import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import globalStyles from "./fonts/GlobalStyles";
import KaKao from "./pages/KaKao";
import PostMyProfile from "./pages/MyProfile/PostMyProfile";
import MatchingPage from "./pages/Matching";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MatchingPostPage from "./pages/MatchPost";
import OtherProfile from "./pages/OtherProfile";
import PostPosting from "./pages/Posting/PostPosting";
import 'react-day-picker/dist/style.css';
import GoogleRedirectHandler from "./components/Login/GoogleRedirectHandler";
import { Suspense, useEffect } from "react";
import { axiosInstance } from "./services/HttpClient";
import NotFound from "./pages/NotFound";
import ReportModal from './components/MatchPost/ReportModal';
import PutMyProfile from "./pages/MyProfile/PutMyProfile";
import PutPosting from "./pages/Posting/PutPosting";
import useLoginInfo from "./hooks/useLoginInfo";
import LottiePageRouting from "./components/LottieFiles/LottiePageRouting";
import useIsMobile from "./hooks/useIsMobile";
import MobileLanding from "./pages/MobileLanding";

function App() {
  const queryClient = new QueryClient();
  useLoginInfo();
  const isMobile = useIsMobile();
  if(isMobile) return <MobileLanding/>;

  return (
    <>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen/>
          <Global styles={globalStyles}/>
          <Suspense fallback={<div><LottiePageRouting/></div>}>
          <Container>
            <Router>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='/matching' element={<MatchingPage></MatchingPage>}/>
                <Route path="/user/kakao-oauth" element={<KaKao />} />
                <Route path="/post-profile" element={<PostMyProfile />} />
                <Route path="/put-profile" element={<PutMyProfile />} />
                <Route path="/matchPost/:idx" element={<MatchingPostPage />} />
                <Route path="/others/:userID" element={<OtherProfile />} />
                <Route path="/post-posting" element={<PostPosting />} />
                <Route path="/put-posting/:idx" element={<PutPosting />} />
                <Route path="/google-callback" element={<GoogleRedirectHandler />} />
                <Route path="/report/:idx" element={<ReportModal />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Router>
          </Container>
          </Suspense>
        </QueryClientProvider>
    </>
  );
}

export default App;

const Container = styled.div``
