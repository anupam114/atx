import Card from "react-bootstrap/Card";
import React from "react";
import ImagePreview from "./ImagePreview";

const DetailCard = ({ data, id, setId, header, content, style }) => {
  const [item, setItem] = React.useState(null);
  React.useEffect(() => {
    if (id !== null) {
      setItem(data.attributes[id]);
      return;
    }
    setItem(null);
  }, [id, data]);
  if (item) {
    return (
      <Card className="sub-detail">
        <Card.Body className="p-0">
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Subtitle className="mb-2 text-muted text-center">
            {/* <i className="fa-solid fa-arrow-left back_button"></i> */}
            <button type="button" class="btn btn-light border border-dark mt-4 mb-0"  onClick={() => setId(null)}>Back to List</button>
          </Card.Subtitle>
          <div className="text-center p-3 list-item">
          <h6 className="h5">{item.name}</h6>
            <p>{item.address}</p>
            <small className={`status-${item.status} px-2`}>
              {item.status}
            </small>
            <small>
              {new Date(item.updated_at).toLocaleString()}
            </small>
            {
              (item.images?(
                (item.images?.length > 0) ? <ImagePreview images={item.images}/> : <b className="d-block">No Images are available</b>
              ):<></>)
            }
            
          </div>
        </Card.Body>
      </Card>
    );
  }
  return (
    <Card className="sub-detail">
      <Card.Body className="p-0">
        {/* <Card.Title>Card Title</Card.Title> */}
        {header?(
          <Card.Subtitle className="text-muted p-2">
            <h6 className="text-center"><span className="detail-header">{data.totalResult}</span> &nbsp; {content}</h6>
            <hr/>
          <span className="status-closed mx-2">Closed</span>
          <span className="status-open mx-2">Open</span>
          <span className="status-caution mx-2">Caution</span>
          <hr/>
        </Card.Subtitle>
        ): <></>}
        {data.attributes?.map((item, index) => {
          return (
            <div key={index} className="text-center list-item" onClick={() => setId(index)}>
              <h6 className="h5">{item.name}</h6>
              <p>{item.address}</p>
              <small className={`status-${item.status} px-2`}>
                {item.status}
              </small>
              <small>
                {new Date(item.updated_at).toLocaleString()}
              </small>
              <hr/>
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default DetailCard;
