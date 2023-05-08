import * as s from './styles';
import PhoneImg from "../../../images/components/PhoneImg.png";

const MatchIntros = () => {
  const text1 = "예술적 관심사를 공유하고 싶은";
  const text2 = "당신을 위한 서비스 !";
  const text3_1 = "예술적 관심사와 취향이 맞는"
  const text3_2 = "친구를 만나고 싶었던 당신에게"
  const text3_3 = "매칭을 통해 나와 취향을 공유 할 수 있는"
  const text3_4 = "를 찾아드릴게요!";
  const text3_5 = "'전시회 메이트'"
  return (
    <s.Warpper>
      <s.TopContainer>
        <s.LeftIntroText>
          <s.IntroText1>{text1}</s.IntroText1>
          <s.IntroText2>{text2}</s.IntroText2>
          <s.TopIntroText3>
            <s.TopIntroTextDetail3>{text3_1}</s.TopIntroTextDetail3>
            <s.TopIntroTextDetail3>{text3_2}</s.TopIntroTextDetail3>
            <s.TopIntroTextDetail3>{text3_3}</s.TopIntroTextDetail3>
            <s.TopIntroTextDetail3>
              <s.TextDetailStrong style={{display:"inline"}}>{text3_5}</s.TextDetailStrong>{text3_4}
            </s.TopIntroTextDetail3>
          </s.TopIntroText3>
        </s.LeftIntroText>
        <s.RightImgContainer>
          <s.PhoneImg src={PhoneImg} alt='phone' />

        </s.RightImgContainer>
      </s.TopContainer>

      <s.MidContainer>


      </s.MidContainer>

      <s.BottomContainer>

      </s.BottomContainer>
    </s.Warpper>
  );
};

export default MatchIntros;
