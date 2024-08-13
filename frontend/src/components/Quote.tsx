import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from '../components/ui/TextRevealCard';


export const Quote = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <TextRevealCard text="You know the business" revealText="And I know the chemistry">
                <TextRevealCardTitle>
                    Storify.com
                </TextRevealCardTitle> 
                <TextRevealCardDescription>
                    Echo your voice through captivating tales
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    )
}