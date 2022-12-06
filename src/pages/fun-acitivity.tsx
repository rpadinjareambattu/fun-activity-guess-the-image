import { useState, useEffect } from "react";
import ImageCard from "../components/card";
import BsModal from "../components/modal";
import scratchImg from "../assets/scratch.jpeg";

function FunActivityPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [parsedData, setParsedData] = useState<any>([]);

  const handleClose = () => {
    setShowModal(false);
  };
  const images = import.meta.glob("../assets/images/*");

  useEffect(() => {
    if (images) {
      const innerData = Object.keys(images).map((inner, index) => {
        return { id: index + 1, imgUrl: inner, isSelected: false, imgName: inner?.split("/")?.pop()?.split(".")[0] };
      });
      setParsedData(innerData);
    }
  }, []);
  console.log("parsedData", parsedData);
  return (
    <section className="cardmain">
      <div className="container-fluid">
        <div className="row">
          {parsedData.map((item: any, index: any) => {
            return (
              <ImageCard
                key={index}
                qans={item.answer}
                imgsrc={scratchImg}
                itemno={item.id}
                handleCardClick={() => {
                  setParsedData([
                    ...parsedData.map((f: { id: any; imgUrl: string; isSelected: boolean }) => {
                      if (f.id === item.id) {
                        return { id: f.id, imgUrl: f.imgUrl, isSelected: true };
                      } else {
                        return f;
                      }
                    }),
                  ]);
                  setShowModal(true);
                  setModalData(item);
                }}
                itemDisabled={item?.isSelected}
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
