const policies = [
  {
    title: "Website Policies",
    content1:
      "By accessing and using our website, you agree to be bound by these terms and conditions. We reserve the right to modify these terms at any time without prior notice.",
    content2:
      "We strive to provide accurate and up-to-date information on our website, but we make no guarantees or warranties about the completeness, accuracy, or reliability of the content.",
  },
  {
    title: "User Agreements",
    content1:
      "You must be at least 18 years old to use our website and make purchases. By using our website, you agree to provide accurate and up-to-date personal information.",
    content2:
      "You are responsible for maintaining the confidentiality of your account information, including your username and password. We are not liable for any unauthorized access to your account.",
  },
  {
    title: "Legal Disclaimers",
    content1:
      "We are not responsible for any damages or losses resulting from the use of our website or the purchase of our products. This includes, but is not limited to, direct, indirect, incidental, consequential, or punitive damages.",
    content2:
      "Paragraphs on this e-commerce website are generated by AI. Images and product details are scraped from real e-commerce websites. Using any images from this website without proper authorization may result in legal copyright issues.",
  },
];

function Policy() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary/5">
      <div className="container max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms and Privacy
            </h1>
            <p className="mt-2 text-foreground/60">
              Welcome to Beats, an e-commerce website for gaming keyboards.
            </p>
          </div>

          <div className="space-y-6">
            {policies.map((policy) => (
              <section key={policy.title}>
                <h2 className="text-xl font-bold">{policy.title}</h2>

                <div className="mt-4 space-y-4 text-foreground/70">
                  <p>{policy.content1}</p>
                  <p>{policy.content2}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
