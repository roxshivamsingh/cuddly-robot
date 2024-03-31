import { green } from "@mui/material/colors";
import { Box, Button, Stack } from "@mui/material";
import { RecentPost } from ".";
// import { useEffect } from "react";
// import axios from "axios";
// import { ChartExample } from "./chart-example";

export function Content() {
    // useEffect(() => {


    //     axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((response) => {

    //         console.log(response.data)
    //     })
    // }, [])
    return (<Box
        className="donut"
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
        <CustomHeader />

        <RecentPost />
        {/* <ChartExample /> */}

    </Box >
    );
}
function CustomHeader() {
    return (
        <>
            <Stack direction='row' justifyContent='space-between'>
                <Stack>
                    <Box sx={{
                        fontWeight: 700,
                        fontSize: "2rem",
                        display: "flex"
                    }}>
                        Hello, <Box
                            sx={{
                                backgroundClip: "text",
                                textFillColor: "transparent",
                                backgroundImage: `radial-gradient(circle at top left, ${green[800]} 0%, #FFFF00 100%)`,
                            }}>
                            &nbsp; Shivam Singh 👋
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: '20px', fontWeight: 500 }}>
                        Welcome to <span style={{ color: green[600] }}> Spot trading!</span>
                    </Box>
                </Stack>

                <Stack justifyContent='center'>
                    <Button
                        size="large"
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            background: green[600],
                            color: "white",
                            "&:hover": { background: green[700] }
                        }}>
                        Start Trading
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}