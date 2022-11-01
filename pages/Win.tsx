import styled from "styled-components";

const Container = styled.div`
  margin: 200px 0px 0px 200px;
width: 650px;
  height: 514px;
  background: radial-gradient(384.16% 384.16% at 50% 50%, #67DF89 12.29%, #8D67DF00 21.15%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WhiteList = styled.div`
  width: 621px;
  height: 480px;

  background: radial-gradient(384.16% 384.16% at 50% 50%, #FFFFFF 12.29%, #AA92D2 21.15%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const WinWord = styled.div`
  Width: 515px;
  Height: 166px;
  margin: 23px;
background-image: url(${'./win.png'});
`
const Congratulations = styled.div`
  width: 519px;
  height: 102px;
  padding-bottom: 80px;
  font-family: 'Circe Rounded';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #5F40A1;
`
const PlayAgainButton = styled.button`
  transition: all 100ms ease-out;
  /* Эффект при наведении */
  &:hover {
    box-shadow: 0px 0px 5px 10px #38df7a;
  }
  &:active { 
    width: 130px; /* Уменьшаем ширину */
    height: 60px; /* Уменьшаем высоту */
    box-shadow:  hsl(8, 90%, 90%); /* Уменьшаем тень */
  }
  margin: 29px;
  color: #fff;
  background: #38df7a;
  font-family: 'Helvetica';
  font-size: 32px;
  width: 260px;
  height: 60px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const Star1 = styled.div`
  width:146px;
  height: 151px;
  position: absolute;
  left: 13.52%;
  right: 76.05%;
  top: 19.09%;
  bottom: 69.3%;
background-image: url(${'star1.png'});
`
const Star2 = styled.div`
  width: 216px;
  height: 223px;
  position: absolute;
  left: 56.14%;
  right: 11.28%;
  top: 35.29%;
  bottom: 50.42%;
background-image: url(${'star.png'});
`
const Star3 = styled.div`
  width:146px;
  height: 151px;
  position: absolute;
  left: 60.45%;
  right: 13.11%;
  top: 73.09%;
  bottom: 16.28%;
background-image: url(${'star1.png'});
`
const Star4 = styled.div`
  width: 216px;
  height: 223px;
  position: absolute;
  left: 7.53%;
  right: 76.7%;
  top: 66.28%;
  bottom: 16.18%;
background-image: url(${'star.png'});
`

 const Win = () => {
  return (
      <Container>
        <Star1/>
        <Star2/>
        <Star3/>
        <Star4/>
        <WhiteList>
          <WinWord/>
          <Congratulations>
            Молодец! Ты успешно справился с заданием!
          </Congratulations>
          <PlayAgainButton>
            Заново
          </PlayAgainButton>
        </WhiteList>
        </Container>
  )
}
export default Win