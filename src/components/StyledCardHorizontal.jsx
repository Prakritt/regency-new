import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function StyledCardHorizontal({ desc, img, title, subtitle }) {
  return (
    <Card className="w-full max-w-[48rem] flex-row mx-auto">
      <CardHeader
        shadow={true}
        floated={true}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={`images/${img}.jpg`}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {subtitle}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default StyledCardHorizontal;
