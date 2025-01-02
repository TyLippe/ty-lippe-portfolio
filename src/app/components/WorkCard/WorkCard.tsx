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
    <>
      {projectData?.length > 0 &&
        projectData.map((project: Project) => {
          return (
            <Box sx={{ maxWidth: 300 }} key={project.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  sx={{ height: 140 }}
                  image={project.image}
                  title={project.name}
                />
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
                      Website
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Box>
          );
        })}
    </>
  );
};
