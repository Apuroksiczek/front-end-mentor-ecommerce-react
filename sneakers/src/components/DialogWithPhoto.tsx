import { Dialog, DialogContent } from '@mui/material'

export type DialogProps = {
    open: boolean;
    setOpenState: (open: boolean) => void;
    image: string;
};

const DialogWithPhoto = ({ open, setOpenState, image }: DialogProps) => {
    return (
        <>
            <Dialog
                style={{backgroundColor: 'transparent' }}
                open={open}
                onClose={val => setOpenState(false)}
            >
                <DialogContent >
                    <img src={image} alt="" />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DialogWithPhoto