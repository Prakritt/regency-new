import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import StyledNavLink from "./StyledNavLink";

function truncateText(
  text,
  maxLength,
  minLengthForNewLines = 80,
  extraLines = 2
) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else if (text.length < minLengthForNewLines) {
    // Add extra new lines to ensure consistent height for short texts
    const newLines = "\n".repeat(extraLines);
    return text + newLines;
  } else {
    return text;
  }
}

function StyledCard({ img, dest, desc, to = "" }) {
  return (
    <Card
      className="mt-6 w-full max-w-sm md:w-96 transition-transform duration-300
                 hover:shadow-lg hover:scale-[1.05] focus-within:scale-[1.05] focus-within:shadow-lg
                 outline-none flex flex-col"
      tabIndex={0}
      role="group"
    >
      <CardHeader
        color="blue-gray"
        className="relative h-56 overflow-hidden rounded-t-lg"
      >
        <img
          src={img}
          alt={dest ? `${dest} image` : "card image"}
          className="object-cover w-full h-full transition-transform duration-500
                     group-hover:scale-105 group-focus-within:scale-105"
        />
      </CardHeader>

      <CardBody className="flex-1 flex flex-col">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 truncate"
          title={dest}
        >
          {dest}
        </Typography>

        {/* Add padding bottom here to avoid overlap with button */}
        <Typography className="text-justify pb-4">
          {truncateText(desc, 150)} {/* 150 chars, adjust as needed */}
        </Typography>
      </CardBody>

      <CardFooter className="pt-2">
        {to ? (
          <StyledNavLink to={to}>
            <Button
              fullWidth
              size="md"
              ripple
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Read More
            </Button>
          </StyledNavLink>
        ) : (
          <Button
            fullWidth
            size="md"
            ripple
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Read More
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default StyledCard;
