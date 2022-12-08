import { useState, useEffect } from "react";
import ImageCard from "../components/card";
import BsModal from "../components/modal";
import scratchImg from "../assets/scratch.jpeg";
import StatisticTable from "../components/table";

function FunActivityPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [parsedData, setParsedData] = useState<any>([]);

  const handleClose = () => {
    setShowModal(false);
  };
  const images = import.meta.glob("../assets/images/*");
  // console.log(import.meta.env.VITE_ASSET_URL)
  useEffect(() => {
    if (images) {
      const innerData = Object.keys(images).map((inner, index) => {
        return {
          id: index + 1,
          imgUrl: inner,
          isSelected: false,
          imgName: inner?.split("/")?.pop()?.split(".")[0].replace(/-/g, " "),
        };
      });
      setParsedData(innerData.sort(() => Math.random() - 0.5));
    }
  }, []);

  return (
    <section className="cardmain">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {parsedData.map((item: any, index: any) => {
                return (
                  <ImageCard
                    key={index}
                    qans={item.answer}
                    imgsrc={scratchImg}
                    itemno={index + 1}
                    handleCardClick={() => {
                      setParsedData([
                        ...parsedData.map(
                          (f: {
                            id: any;
                            imgUrl: string;
                            isSelected: boolean;
                          }) => {
                            if (f.id === item.id) {
                              return {
                                id: f.id,
                                imgUrl: f.imgUrl,
                                isSelected: true,
                              };
                            } else {
                              return f;
                            }
                          }
                        ),
                      ]);
                      setShowModal(true);
                      setModalData(item);
                    }}
                    itemDisabled={item?.isSelected}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            <StatisticTable />
          </div>
        </div>
        <BsModal
          showModal={showModal}
          data={modalData}
          hideModal={handleClose}
        ></BsModal>
      </div>
    </section>
  );
}

export default FunActivityPage;
