import styled from "styled-components";

export default function LargeCard({ title, description, subheading }) {
  return (
    <StyledWrapper>
      <div className="card text-white">
        <div className="card-content">
          <h2>{title}</h2>
          <h4>{subheading}</h4>
          <p>{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 800px;
    height: 400px;
    background: #543ac8df;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    text-align: center;
    padding: 20px;
  }

  .card-content {
    z-index: 1;
    color: white;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: normal;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    background-color: #b8ade6;
    transition: all 0.5s;
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .card:hover::before,
  .card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  .card:hover::after {
    content: "";
  }
`;
