import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { customFetch } from '@/utils';
import { SubmitButton, FormInput } from '@/components';
import { useAppDispatch } from '@/hooks';
import { login } from '@/features/user/userSlice';
import { Form, Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginAsGuest = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const { data } = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      const {
        jwt,
        user: { username },
      } = data;
      dispatch(login({ username, jwt }));
      navigate('/');
    } catch (error) {
      console.error('Error logging in as guest:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST" action="/login">
            <FormInput
              type="email"
              placeholder="email"
              name="identifier"
              id="identifier"
            />
            <FormInput
              type="password"
              placeholder="password"
              name="password"
              id="password"
            />
            <SubmitButton text="login" className="w-full mt-4 capitalize" />
            <Button
              type="button"
              variant="outline"
              onClick={loginAsGuest}
              className="w-full mt-4 capitalize"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex">
                  <ReloadIcon className="mr-2 h4 w-4 animate-spin" />
                </span>
              ) : (
                'Guest User'
              )}
            </Button>

            <p className="text-center mt-4">
              Not a member yet?
              <Button asChild variant="link" type="button">
                <Link to="/register">Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;
