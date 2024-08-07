interface IButton {
  content: string;
  href: string;
}

function Button({ content, href }: IButton) {
  return (
    <a className="btn-primary" href={href}>
      {content}
    </a>
  );
}

export default Button;
