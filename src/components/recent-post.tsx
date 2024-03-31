import { Button, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
export function RecentPost() {
    return (<Paper sx={{ p: 2, borderRadius: 3 }}>
        <Stack spacing={2}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: "center" }}>
                In recent posts
            </Typography>
            <Divider />
            <Stack spacing={2}>
                <Paper sx={{ background: "black", p: 2, borderRadius: 3 }}>
                    <Grid container>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                            <Stack sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>
                                <AccountCircleOutlinedIcon sx={{ fontSize: "4rem" }} />

                            </Stack>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10}>
                            <Stack
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    verticalAlign: "middle",
                                    pb: 1

                                }}
                            >
                                <Stack
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        // verticalAlign: "middle"
                                    }}

                                >
                                    <Typography fontWeight='bold' variant="h6">Carbon Cell</Typography>
                                    <IconButton>
                                        <VerifiedIcon />
                                    </IconButton>
                                </Stack>
                                <Typography>@carboncell . 2h</Typography>
                            </Stack>
                            <Divider />

                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} />

                        <Grid item xs={10} sm={10} md={10} lg={10}>

                            <Stack>
                                Carbon cell: Pioneering Financial Solutions for a Greener Future!
                                <Typography gutterBottom>
                                    Read more: <u>https://roxshivamsingh.vercel.app</u>

                                </Typography>

                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem obcaecati ad excepturi deleniti saepe facere impedit ipsum iste illum ea delectus minus doloribus vel quos, unde esse voluptate at.
                                </Typography>
                            </Stack>
                            <Divider />
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} />

                        <Grid item xs={10} sm={10} md={10} lg={10}>
                            <Stack sx={{
                                p: 1,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%"
                            }}>
                                <Button startIcon={<ModeCommentOutlinedIcon />} size="large" sx={{ color: grey[500] }}>
                                    19
                                </Button>
                                <Button startIcon={<RepeatOutlinedIcon />} size="large" sx={{ color: grey[500] }}>
                                    48
                                </Button>
                                <Button startIcon={<FavoriteBorderOutlinedIcon />} size="large" sx={{ color: grey[500] }}>
                                    482
                                </Button>

                                <Button startIcon={<IosShareOutlinedIcon />} size="large" sx={{ color: grey[500] }}>
                                    36
                                </Button>
                            </Stack>

                        </Grid>
                    </Grid>

                </Paper>
                <Button
                    size="large"
                    sx={{
                        textTransform: "none",
                        background: green[600],
                        color: "white",
                        "&:hover": { background: green[700] }
                    }}
                    variant='contained'>
                    Follow us on Twitter
                </Button>
            </Stack>
        </Stack>

    </Paper>)
}