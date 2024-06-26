import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import SectionHeading from "../components/SectionHeading";

const CustomTimelineItem = ({ title, desc, image }) => {
  console.log("Image    ", image);
  return (
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader>
        <TimelineIcon className="p-0">
          <Avatar
            size="sm"
            src={`/images/tours/${image}`}
            alt="user 1"
            withBorder
          />
        </TimelineIcon>
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
      </TimelineHeader>
      <TimelineBody className="pb-8">
        <Typography
          color="gary"
          className="font-normal text-gray-600 text-justify"
        >
          {desc}
        </Typography>
      </TimelineBody>
    </TimelineItem>
  );
};
function CustomTimeline({ itenary }) {
  return (
    <div className=" mb-12 md:mb-20">
      <SectionHeading title="Itinerary" />
      <div className=" w-[20rem] sm:w-[31rem] mx-auto">
        <Timeline>
          {itenary.map((item, index) => (
            <CustomTimelineItem
              key={index}
              title={item.day}
              desc={item.description}
              image={item.image}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default CustomTimeline;
