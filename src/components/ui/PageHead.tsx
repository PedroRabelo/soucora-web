import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  keywords?: string;
};

export function PageHead({ ...props }: Props) {
  return (
    <Head>
      <title>{`${props.title} - Cora Saúde`}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
