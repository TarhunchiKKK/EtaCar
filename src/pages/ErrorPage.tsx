import { PiSmileySadFill } from 'react-icons/pi';
import { Button } from '../shared';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
    const navigate = useNavigate();

    return (
        <section className='py-4'>
            <div className='container mx-auto pt-24 md:pt-40 relative'>
                <div className='max-w-[100px] absolute top-0 left-0'>
                    <Button
                        content='Home'
                        color='rgb(67 56 202)'
                        handleClick={() => {
                            navigate('/');
                        }}
                    />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-[36px] mb-10'>Not found</h1>
                    <div className='w-[300px] h-[300px]'>
                        <PiSmileySadFill className='w-full h-full' />
                    </div>
                </div>
            </div>
        </section>
    );
}
