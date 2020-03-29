import React,{Component} from 'react';
import {Container, MediaBox, Slider, Slide, Caption, Row, Col, Card, CardTitle} from "react-materialize";

const style={
  span:{
    backgroundColor:"#F43228",
  },
  row:{

  },
  div:{
    padding:"0",
    backgroundColor:"black",
    width:"100%"
  }
}

class App extends Component{
  render(){
    return(
      <div>
        <Slider
        fullscreen={false}
        options={{
          height:400
        }}
        >
          <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
            <Caption placement="center">
              <h3>
                Pantai
              </h3>
              <h5>
                Dapatkan Kesempatan Jalan - Jalan Ke Pantai Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"/>}>
            <Caption placement="center">
              <h3>
                City
              </h3>
              <h5>
                Dapatkan Kesempatan Jalan - Jalan Ke City Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?"/>}>
            <Caption placement="center">
              <h3>
                Paris
              </h3>
              <h5>
                Dapatkan Kesempatan Jalan - Jalan Ke Paris Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
        </Slider>
        <Row>
          <Col m={3} >
            <Card
              className="small"
              header={
                <CardTitle
                  image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg"
                >
                  Audio
                </CardTitle>

              }
            >
                Audio Technica - Mulai Dari <span style={style.span}>Rp 910rb</span>
                <br/>
                <br/>
            </Card>
          </Col>

          <Col m={3}>
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone</CardTitle>
              }
            >
              Handphone Samsung - Mulai Dari <span style={style.span}>Rp 200 rb</span>
            </Card>
          </Col>

          <Col  m={3}>
            <Card
              className="small"
              header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Sequishy</CardTitle>}
            >
              Sequishy - Mulai Dari <span style={style.span}>Rp 5,5rb</span>
              <br/>
              <br/>
            </Card>
          </Col>

          <Col m={3}>
            <Card
              className="small"
              header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Koleksi Avengers</CardTitle>}
            >
              Koleksi The Avenger - Mulai Dari <span style={style.span}>Rp 10 Jta</span>
              <br/>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default App;
