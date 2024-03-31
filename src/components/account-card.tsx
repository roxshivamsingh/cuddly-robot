
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge } from '@mui/material';
import { grey } from '@mui/material/colors';

export function AccountCard() {
    return (
        <Card sx={{
            m: 1,
            background: grey[800],
        }}>
            <CardHeader
                avatar={<Badge variant='dot' color='secondary'>
                    <AccountCircleOutlinedIcon fontSize='large' />
                </Badge>}
                action={<IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>}
                title="Shivam Singh"
                subheader="example@gmail.com"
            />
        </Card>);
}
