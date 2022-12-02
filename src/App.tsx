import "./App.css";
import ImageCard from "./components/card";
import scratchImg from "./assets/images/scratch.jpeg";

const data: any = [
  {
    qno: 1,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
  },
  {
    qno: 2,
    imgUrl:
      "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
  },
];

function App() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {data.map((item: any, index: any) => {
            console.log(item);
            return (
              <ImageCard
                key={index}
                qans={item.answer}
                imgsrc={scratchImg}
                itemno={item.qno}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
