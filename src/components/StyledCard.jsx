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
    <Card className="mt-6 w-full max-w-sm md:w-96 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader color="blue-gray" className="relative h-56 overflow-hidden">
        <img
          src={img}
          alt={dest ? `${dest} image` : "card image"}
          className="object-cover w-full h-full"
        />
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
