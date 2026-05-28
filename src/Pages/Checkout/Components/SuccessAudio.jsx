function SuccessAudio({ successAudioRef, successSound }) {
    return (
        <audio ref={successAudioRef}>
            <source src={successSound} type="audio/wav" />
        </audio>
    );
}

export default SuccessAudio;