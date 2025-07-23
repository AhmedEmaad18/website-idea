type ErrorAlertProps = {
  message: string;
};

export default function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <div
      className="alert alert-danger animate__animated animate__shakeX"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <strong>Error:</strong> {message}
    </div>
  );
}
