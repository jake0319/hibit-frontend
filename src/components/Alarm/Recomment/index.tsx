import { useNavigate } from "react-router-dom";
import reply from "../../../images/components/Alarm/Imoji/reply.svg";
import * as s from "./styles";
import { IAlarm } from "../../../interfaces/Alarm/IAlarm";
import AlarmAPI from "../../../api/AlarmAPI";

const Recomment = (props: IAlarm) => {
  const navigate = useNavigate();
  const alarms = props;
  
  const onClickAlarm = () => {
    AlarmAPI.putAlarmRead(alarms.idx)
      .then((res) => {
        console.log({res});
      })
      .catch((e) => {
        console.error({e});
      });
    
    navigate(`/matchPost/${alarms.postIdx}`);
  };
  
  return (
    <s.Wrapper onClick={() => onClickAlarm()}>
      <s.ProfileImgWrapper>
        <s.ProfileImg 
          src={alarms.imglink}
          alt="profile"
        />
        <s.Imoji 
          src={reply}
          alt="imoji"
        />
      </s.ProfileImgWrapper>

      <s.ContentsWrapper>
        <s.MainContents>
          {alarms.nickname}님이 회원님의 댓글에 대댓글을 남겼습니다.
        </s.MainContents>
        <s.Time>{alarms.time}</s.Time>
      </s.ContentsWrapper>
    </s.Wrapper>
  )
};

export default Recomment;
