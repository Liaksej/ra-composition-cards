import { Box, Button, Card, CardActions } from "@mui/material";
import { ReactNode } from "react";

interface CardTemplateProps {
  children: ReactNode;
}

export const CardTemplate = ({ children }: CardTemplateProps) => {
  return (
    <Box className="w-20 mx-auto p-4" sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {children}
        <CardActions>
          <Button size="small">Go somewhere</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
