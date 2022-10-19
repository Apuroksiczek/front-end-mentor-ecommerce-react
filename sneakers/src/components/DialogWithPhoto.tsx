import { Dialog, DialogContent } from '@mui/material'
import { DialogProps } from '../models/dialog-props-interface'

const DialogWithPhoto = ({ open, setOpenState, image }: DialogProps) => {
    return (
        <>
            <Dialog
                style={{ backgroundColor: 'transparent' }}
                open={open}
                onClose={val => setOpenState(false)}
            >
                <DialogContent className='dialog-content'
                >
                    <img src={image} alt="" />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DialogWithPhoto