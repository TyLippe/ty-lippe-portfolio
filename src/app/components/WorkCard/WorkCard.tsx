import Link from "next/link";
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  websiteURL: string;
  githubURL: string;
};

export const WorkCard = ({ projectData }: { projectData: Project[] }) => {
  return (
    <div className="work-cards-container">
      {projectData?.length > 0 &&
        projectData.map((project: Project) => {
          return (
            <Box sx={{ maxWidth: 420 }} key={project.id}>
              <Card variant="outlined" className="work-card">
                <CardMedia
                  sx={{ height: 200 }}
                  image={`/static/assets/img/${project.image}`}
                  title={project.name}
                  className="work-card-media"
                />
                <div className="work-card-content">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      <Button size="small" component="a">
                        View Source Code
                      </Button>
                    </Link>
                    <Link
                      href={project.websiteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      <Button size="small" component="a">
                        Visit Website
                      </Button>
                    </Link>
                  </CardActions>
                </div>
              </Card>
            </Box>
          );
        })}
    </div>
  );
};
