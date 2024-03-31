import { green } from "@mui/material/colors";
import { Box, Button, Stack } from "@mui/material";

export function Content() {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >

            <Box sx={{ mt: 2 }} />
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
                        Welcome to <span style={{ color: green[800] }}> Spot trading</span>
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
                            "&:hover": {
                                background: green[700]
                            }
                        }}>
                        Start Trading
                    </Button>
                </Stack>
            </Stack>

            {/* <Typography paragraph>
                Still in progress roxshivamsingh@gmail.com
            </Typography> */}
        </Box >
    );
}