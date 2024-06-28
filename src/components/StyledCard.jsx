import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import StyledNavLink from "./StyledNavLink";

function StyledCard({ img, dest, desc, to = "" }) {
  return (
    <Card className="mt-6 w-96 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={img} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {dest}
        </Typography>
        <Typography className="text-justify">{desc}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {to ? (
          <StyledNavLink to={to}>
            <Button>Read More</Button>
          </StyledNavLink>
        ) : (
          <Button>Read More</Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default StyledCard;
