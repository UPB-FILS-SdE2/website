import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Logiciel système',
    Svg: require('@site/static/img/os_logo.svg').default,
    description: (
      <>
        Ce cours vous aidera à découvrir le fonctionnement du logiciel système 
        et la manière dont le logiciel est connecté au matériel.
      </>
    ),
  },
  {
    title: 'Linux',
    Svg: require('@site/static/img/linux_logo.svg').default,
    description: (
      <>
        Vous comprendrez mieux le fonctionnement de Linux et comment développer 
        des applications pour celui-ci.
      </>
    ),
  },
  {
    title: 'Powered by Rust',
    Svg: require('@site/static/img/rust_logo.svg').default,
    description: (
      <>
        Développer en Rust, un langage de programmation système nouvelle génération qui 
        remplacera très probablement le C/C++.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
