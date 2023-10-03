import { CardTemplate } from "@/components/CardTemplate";
import { CardContent, CardMedia, Typography } from "@mui/material";

const headers = ["Card title", "Special title treatment"];

const bodies = [
  "Some quick example text to build on the card title and make up the bulk of the card's content.",
  "With supporting text below as a natural lead-in to additional content.",
];

const images = ["https://via.placeholder.com/150"];

export default function Home() {
  return (
    <div>
      <CardTemplate>
        <CardMedia
          sx={{ height: 140 }}
          image={images[0]}
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            {headers[0]}
          </Typography>
          <Typography variant="body2">{bodies[0]}</Typography>
        </CardContent>
      </CardTemplate>
      <CardTemplate>
        <CardContent>
          <Typography variant="h6" component="h2">
            {headers[1]}
          </Typography>
          <Typography variant="body2">{bodies[1]}</Typography>
        </CardContent>
      </CardTemplate>
    </div>
  );
}
