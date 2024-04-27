import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";
import timestampToJalali from "../../../utils/timestampToJalali";
import MainButton from "../buttons/mainButton";
import { IBoxFilterProps } from "./boxFilter.types";

const BoxFilter: FC<IBoxFilterProps> = ({ item, index, page }) => {
  return (
    <Box paddingBottom={8}>
      <Box
        sx={{
          padding: "10px 50px",
          margin: "0px auto",
          width: "1500px",
          borderRadius: "20px",
          border: "2px solid #efefef",
          minHeight: "500px",
          marginBottom: "30px !important",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="auto"
        >
          <Box sx={{ display: "flex", gap: "80px", marginTop: "20px" }}>
            <Typography color="gray">
              ردیف: {(page - 1) * 20 + index + 1}
            </Typography>
            <Typography color="gray">
              تاریخ تشکیل : {timestampToJalali(+item.file.created_date)}
            </Typography>
          </Box>
          <Box>
            <MainButton
              variant="contained"
              color="secondary"
              size="baseMd"
              fullWidth
            >
              <Typography color="white"> ورود به صفحه پرونده</Typography>
            </MainButton>
          </Box>
        </Box>
        <Divider sx={{ marginTop: "50px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "25px",
            marginBottom: "50px",
          }}
        >
          <Typography>پرونده : {item.file.file_code}</Typography>
          <Typography>نوع پرونده : {item.file.file_type.fa_name} </Typography>
          <Typography> شعبه : {item.file.branch.name} </Typography>
          <Typography>
            آدرس :
            {`${item.file.visit_province.name}__${item.file.visit_county.name}`}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Box position="relative">
            <span
              style={{
                height: "60px",
                width: "2px",
                color: "gray",
                backgroundColor: "grey",
                marginRight: "-15px",
                position: "absolute",
                top: "60px",
              }}
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="start"
              marginTop={8}
            >
              <Typography>نام بیمه کذار</Typography>
              <Typography variant="caption" fontSize={12} marginTop={2}>
                {item.file.insurer_full_name}
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <span
              style={{
                height: "60px",
                width: "2px",
                color: "gray",
                backgroundColor: "grey",
                marginRight: "-15px",
                position: "absolute",
                top: "60px",
              }}
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="start"
              marginTop={8}
            >
              <Typography>شاخه بیمه</Typography>
              <Typography variant="caption" fontSize={12} marginTop={2}>
                {item.file.insurance_section.name}
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <span
              style={{
                height: "60px",
                width: "2px",
                color: "gray",
                backgroundColor: "grey",
                marginRight: "-15px",
                position: "absolute",
                top: "60px",
              }}
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="start"
              marginTop={8}
            >
              <Typography>ارزیاب</Typography>
              <Typography variant="caption" fontSize={12} marginTop={2}>
                تعریف نشده
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <span
              style={{
                height: "60px",
                width: "2px",
                color: "gray",
                backgroundColor: "grey",
                marginRight: "-15px",
                position: "absolute",
                top: "60px",
              }}
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="start"
              marginTop={8}
            >
              <Typography>نوع بیمه نامه</Typography>
              <Typography variant="caption" fontSize={12} marginTop={2}>
                {item.file.insurance_type.name}
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <span
              style={{
                height: "60px",
                width: "2px",
                color: "gray",
                backgroundColor: "grey",
                marginRight: "-15px",
                position: "absolute",
                top: "60px",
              }}
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="start"
              marginTop={8}
            >
              <Typography>شعبه بیمه گر</Typography>
              <Typography variant="caption" fontSize={12} marginTop={2}>
                {item.file.insurance_branch.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BoxFilter;
