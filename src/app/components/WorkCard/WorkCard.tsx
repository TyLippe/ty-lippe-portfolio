import Link from "next/link";
import Image from "next/image";
import { Button, Container, Typography } from "@mui/material";

export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  websiteURL?: string | null;
  githubURL?: string | null;
};

export const WorkCard = ({ projectData }: { projectData: Project[] }) => {
  return (
    <div className="work-cards-container">
      {projectData?.length > 0 &&
        projectData.map((project: Project, index: number) => {
          const isOdd = index % 2 !== 0;
          return (
            <Container
              key={project.id}
              className="work-card-row"
              sx={{
                display: "flex",
                mb: 2,
                flexDirection: isOdd ? "row-reverse" : "row",
              }}
            >
              <Image
                src={`/static/assets/img/${project.image}`}
                alt={project.name}
                className="work-card-image"
                width={360}
                height={280}
              />
              <div
                className="work-card-content"
                style={{
                  paddingRight: isOdd ? "12px" : "0",
                  paddingLeft: isOdd ? "0" : "12px",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  className="work-card-title"
                >
                  {project.name}
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", mb: 1.5 }}
                  className="work-card-description"
                >
                  {project.description}
                </Typography>
                <div
                  className="work-card-actions"
                  style={{ paddingRight: isOdd ? "16px" : "0" }}
                >
                  {project.githubURL && (
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
                  )}
                  {project.websiteURL && (
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
                  )}
                </div>
              </div>
            </Container>
          );
        })}
    </div>
  );
};
