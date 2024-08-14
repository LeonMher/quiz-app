import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "@mui/material/Button";

export const Hero = () => {
  return (
    <div className="flex justify-start items-center h-[100vh]">
      <div className="text-white text-5xl">
        Building beautify web experiences.
      </div>
      <div className="flex flex-col">
        <Button
          variant="contained"
          sx={{ height: "60px", width: "200px" }}
          className="text-white text-5xl"
        >
          {" "}
          <RemoveRedEyeIcon />
          My Work.
        </Button>
      </div>
    </div>
  );
};
