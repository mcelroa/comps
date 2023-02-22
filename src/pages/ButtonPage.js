import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoFlame,
  GoZap,
} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <div>
        <Button
          primary
          rounded
          outline
          className="mb-2 mt-2 mx-2"
          onClick={handleClick}
        >
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded className="mb-2 mx-2">
          <GoCloudDownload />
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded className="mb-2 mx-2">
          <GoDatabase />
          Success
        </Button>
      </div>
      <div>
        <Button warning rounded className="mb-2 mx-2">
          <GoZap />
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded className="mb-2 mx-2">
          <GoFlame />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
