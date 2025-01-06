import { Form, Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { FormInput, SubmitButton } from '@/components';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST" action="/register">
            <FormInput
              placeholder="username"
              type="text"
              name="username"
              id="username"
            />
            <FormInput
              placeholder="email"
              type="email"
              name="email"
              id="email"
            />
            <FormInput
              placeholder="password"
              type="password"
              name="password"
              id="password"
            />
            <SubmitButton text="submit" className="w-full mt-4" />
            <p className="text-center mt-4">
              Already a member?
              <Button asChild variant="link" type="button">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Register;
