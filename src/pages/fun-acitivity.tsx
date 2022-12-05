import { useState } from "react";
import ImageCard from "../components/card";
import BsModal from "../components/modal";
import scratchImg from "../assets/images/scratch.jpeg";

const data: any = [
  {
    qno: 1,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 2,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 3,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 4,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 5,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 6,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 7,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 8,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 9,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 10,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 11,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 12,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 13,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 14,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 15,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 16,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 17,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 18,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
  {
    qno: 19,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
    answer: "img 1 ans",
    isSelected: false,
  },
  {
    qno: 20,
    imgUrl: "https://static.toiimg.com/thumb/msid-94248825,width-748,height-499,resizemode=4,imgsize-90508/.jpg",
    answer: "img 2 ans",
    isSelected: false,
  },
];

function FunActivityPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  const handleClose = () => {
    setShowModal(false);
  };
  console.log("setModalData", modalData);
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {data
            .sort(() => Math.random() - 0.5)
            .map((item: any, index: any) => {
              return (
                <ImageCard
                  key={index}
                  qans={item.answer}
                  imgsrc={scratchImg}
                  itemno={item.qno}
                  itemDisabled={item.isSelected}
                  handleCardClick={() => {
                    setShowModal(true);
                    item.isSelected = true;
                    setModalData(item);
                  }}
                />
              );
            })}
        </div>

        <BsModal showModal={showModal} data={modalData} hideModal={handleClose}></BsModal>
      </div>
    </section>
  );
}

export default FunActivityPage;
