import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <form className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Your full name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Write your message here..."
            rows={5}
            required
          />
        </div>
        <Button type="submit" className="w-full md:w-auto">
          Send Message
        </Button>
      </form>
    </section>
  )
}
 export default Contact;