import * as C from './styles'

type Props = {
    imageUri?: string | undefined;
}

export const Avatar = ({ imageUri }: Props) => {

    return(
        <C.Container>
            <div>
                <C.Image src={imageUri ?? 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png'} alt="avatar" />
            </div>
        </C.Container>
    );
}