import type { ProductType } from '../types/Types'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ProductCardProps {
    product: ProductType
}

function ProductCard(props: ProductCardProps) {

    const { id, title, price, description, category, image, rating } = props.product;

    return (
        <Card sx={{ cursor: 'pointer', boxShadow: '1px 5px 5px lightslategrey', width: '330px', height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '60px 10px' }}>
            <img src={image} width={230} height={230} />
            <CardContent sx={{ height: '200px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title.substring(0, 50)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description.substring(0, 200)}...
                </Typography>
            </CardContent>
            <div>
                <h3 style={{ fontFamily: 'Times New Roman', cursor: 'auto' }}>{price} $</h3>
            </div>
            <CardActions>
                <Button size='small' variant='outlined' color='info'>Details</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard