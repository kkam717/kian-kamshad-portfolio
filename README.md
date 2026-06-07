# Kian Kamshad — Portfolio

Personal portfolio site for [kiankamshad.com](https://kiankamshad.com).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

Messages are sent via [FormSubmit](https://formsubmit.co) to `kiankamshad717@gmail.com`. On first use, FormSubmit will send a confirmation email to that address — click the link to activate the form.

## Deploy to Netlify

1. Sign in at [netlify.com](https://www.netlify.com) with GitHub.
2. **Add new site → Import an existing project** → select [kkam717/kian-kamshad-portfolio](https://github.com/kkam717/kian-kamshad-portfolio).
3. Netlify should auto-detect Next.js. Confirm these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. Click **Deploy site**.

`netlify.toml` in the repo configures the [Netlify Next.js adapter](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/) automatically.

## Connect GoDaddy domain

1. In Netlify: **Site configuration → Domain management → Add a domain** → enter `kiankamshad.com`.
2. Netlify will show the DNS records you need. In **GoDaddy → My Products → DNS** for your domain, add:

   | Type | Name | Value |
   |------|------|-------|
   | `A` | `@` | Netlify's load balancer IP (shown in Netlify — usually `75.2.60.5`) |
   | `CNAME` | `www` | Your Netlify subdomain (e.g. `your-site-name.netlify.app`) |

3. Remove any conflicting GoDaddy parking or forwarding records for `@` and `www`.
4. Back in Netlify, set `kiankamshad.com` as the **primary domain** and enable **HTTPS** (automatic once DNS propagates, usually 5–30 minutes).

## Manual build

```bash
npm run build
npm start
```
